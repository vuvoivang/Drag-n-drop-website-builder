import { useEffect, useState } from 'react'

type UseResizeProps = {
  minWidth: number;
  initialWidth: number;
  direction?: string;
}

type UseResizeReturn = {
  width: number;
  enableResize: () => void;
  isResizing: boolean;
}

const useResize = ({
  minWidth,
  initialWidth,
  direction = "ltr",
}: UseResizeProps): UseResizeReturn => {
  const [isResizing, setIsResizing] = useState(false)
  const [width, setWidth] = useState(initialWidth)

  const enableResize = () => {
    setIsResizing(true)
  };

  const disableResize = () => {
    setIsResizing(false)
  };

  const resize = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = direction === "ltr" ? e.clientX : (document.body.clientWidth - e.clientX);
      if (newWidth >= minWidth) {
        setWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', resize)
    document.addEventListener('mouseup', disableResize)

    return () => {
      document.removeEventListener('mousemove', resize)
      document.removeEventListener('mouseup', disableResize)
    }
  }, [disableResize, resize])

  return { width, enableResize, isResizing }
}

export default useResize;
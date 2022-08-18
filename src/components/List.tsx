import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const List = ({
  children,
  title,
  orientation = 'vertical',
  buttons,
  scrollBy = 500,
  className,
  full = false,
}: {
  children: React.ReactNode
  title?: string
  buttons?: boolean
  full?: boolean
  scrollBy?: number
  className?: string
  orientation?: 'vertical' | 'horizontal' | 'dynamic' | 'double-vertical'
}) => {
  const listRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setHeight(
      listRef.current?.offsetHeight ? listRef.current.offsetHeight / 2 : 0
    )
  }, [listRef.current?.offsetHeight, children])

  const scrollLeft = (): void => {
    const scroll = listRef.current?.offsetWidth
      ? listRef.current.offsetWidth - 20
      : scrollBy
    listRef.current?.scroll({
      left: full
        ? listRef.current.scrollLeft - scroll
        : listRef.current.scrollLeft - scrollBy,
      behavior: 'smooth',
    })
  }

  const scrollRight = (): void => {
    const scroll = listRef.current?.offsetWidth
      ? listRef.current.offsetWidth - 20
      : scrollBy
    listRef.current?.scroll({
      left: full
        ? listRef.current.scrollLeft + scroll
        : listRef.current.scrollLeft + scrollBy,
      behavior: 'smooth',
    })
  }

  if (orientation === 'dynamic')
    return (
      <>
        {title && (
          <h3 className="mt-3 mb-2 text-xl font-medium md:text-3xl">{title}</h3>
        )}
        <div
          ref={listRef}
          className={
            'no-scrollbar mb-5 mt-4 flex w-full overflow-x-auto ' + className
          }
        >
          <div className="flex w-auto min-w-full flex-col md:flex-row md:py-5">
            {children}
          </div>
        </div>
        {buttons && (
          <div className="relative hidden w-full md:flex">
            <div
              onClick={scrollLeft}
              style={{ bottom: height + 'px' }}
              className="absolute left-2 z-30 flex -translate-y-1/2 cursor-pointer rounded-full bg-white p-1 text-accent xl:-left-12"
            >
              {/* <Image src={pointer} alt="left" /> */}
              <BsArrowLeftCircle />
            </div>
            <div
              onClick={scrollRight}
              style={{ bottom: height + 'px' }}
              className="absolute right-2 z-30 flex -translate-y-1/2 cursor-pointer rounded-full bg-white p-1 text-accent xl:-right-12"
            >
              {/* <Image src={pointer} alt="right" /> */}
              <BsArrowRightCircle />
            </div>
          </div>
        )}
      </>
    )
  if (orientation === 'horizontal')
    return (
      <>
        {title && (
          <h3 className="mt-3 mb-2 text-xl font-medium md:text-3xl">{title}</h3>
        )}
        <div
          ref={listRef}
          className={
            'no-scrollbar h-max w-full overflow-x-auto py-1' + className
          }
        >
          <div className="flex w-auto scroll-smooth">{children}</div>
        </div>
        {buttons && (
          <div className="relative hidden w-full md:flex">
            <div
              onClick={scrollLeft}
              style={{ bottom: height + 'px' }}
              className="absolute left-2 z-30 flex -translate-y-1/2 cursor-pointer rounded-full bg-white p-1 text-accent xl:-left-12"
            >
              {/* <Image src={pointer} alt="left" /> */}
              <BsArrowLeftCircle />
            </div>
            <div
              onClick={scrollRight}
              style={{ bottom: height + 'px' }}
              className="absolute right-2 z-30 flex -translate-y-1/2 cursor-pointer rounded-full bg-white p-1 text-accent xl:-right-12"
            >
              {/* <Image src={pointer} alt="right" /> */}
              <BsArrowRightCircle />
            </div>
          </div>
        )}
      </>
    )
  if (orientation === 'double-vertical')
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        {children}
      </div>
    )
  return (
    <>
      {title && (
        <h3 className="mt-3 mb-4 text-xl font-medium md:text-3xl">{title}</h3>
      )}
      <div className={'flex w-auto min-w-full flex-col ' + className}>
        {children}
      </div>
    </>
  )
}

export default List

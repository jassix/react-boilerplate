import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react'

interface RendererProps {
  childs: ReactNode
  children?: ReactNode
}

type RendererType<P> = FC<RendererProps & P>

interface SlotProps<P> {
  showChildren?: boolean
  restProps?: P & { defaultChildren: ReactNode }
}

type NormalOrFunctionChildren<P> =
  | ReactNode
  | ((props: P & { defaultChildren: ReactNode }) => ReactNode)

interface SlotType<P> {
  (
    props: SlotProps<P> & { children?: NormalOrFunctionChildren<P> },
  ): ReactElement | null
  Renderer: RendererType<P>
}

export function createSlot<P extends object>(): SlotType<P> {
  const Slot: SlotType<P> = (({ children, showChildren, restProps }) => {
    if (!showChildren) {
      return null
    }

    if (typeof children === 'function' && restProps) {
      return children(restProps)
    }

    return <>{children}</>
  }) as SlotType<P>

  const Renderer: RendererType<P> = ({ childs, children, ...restProps }) => {
    const slotted = Children.toArray(childs).find((child) => {
      return isValidElement(child) && child.type === Slot
    })

    if (!slotted || !isValidElement(slotted)) {
      return <>{children}</>
    }

    return cloneElement(slotted, {
      showChildren: true,
      restProps: { ...restProps, defaultChildren: children },
    } as unknown as SlotProps<P>)
  }

  Slot.Renderer = Renderer

  return Slot
}

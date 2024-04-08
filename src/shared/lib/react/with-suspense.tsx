import { FC, Suspense, SuspenseProps } from 'react'

export const withSuspense = <WrappedProps extends object>(
  WrappedComponent: FC<WrappedProps>,
  suspenseProps: SuspenseProps,
): FC<WrappedProps> => {
  const WrapperComponent = (props: WrappedProps) => {
    return (
      <Suspense {...suspenseProps}>
        <WrappedComponent {...props} />
      </Suspense>
    )
  }

  return WrapperComponent
}

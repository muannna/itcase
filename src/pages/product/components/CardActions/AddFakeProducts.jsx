import { Button } from '../../../../shared/ui/button/Button'

export function AddFakeProducts({ onAddFake }) {
  return (
    <Button isCart={true} onClick={onAddFake}>
      Add fake products
    </Button>
  )
}

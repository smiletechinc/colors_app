type Color = {
    id: number,
    name: string,
    code: string
}

type ColorState = {
    colors: Color[]
}

type ColorAction = {
    type: string
    color: Color
}
type DispatchType = (args: ColorAction) => ColorAction
type Colors = Array<Color>;
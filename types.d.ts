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
type AuthObject = {
    email:string;
    password:string;
};

type UserObject = {
    id:string;
    email:string;
    name:string;
}

type ErrorObject = {
    code?: string;
    message: string, 
}
type DispatchType = (args: ColorAction) => ColorAction
type Colors = Array<Color>;
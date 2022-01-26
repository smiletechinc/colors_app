type Color = {
    id: number,
    name: string,
    code: string,
    createdBy: string,
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

type UserState = {
    authUser: UserObject
}

type UserAction = {
    type: string,
    authUser: UserObject
}

type ErrorObject = {
    code?: string;
    message: string, 
}

type DispatchType = (args: ColorAction) => ColorAction
type Colors = Array<Color>;
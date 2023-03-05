export interface iEvent {
    target: {
        value: string,
        name: string
    }
}

export interface iMainWrapperProps {
    background: string,
    children: ReactDOM,
    isInfinite: boolean
}

export interface iErrorWrapperProps {
    error: Error
}

export interface iLoginWrapperProps {
    type: "auth" | "create",
    isMobileDevice: boolean

}

export interface iPageProps {
    isMobileDevice: boolean
}

export interface iComponent {
    isMobileDevice: boolean
}


export interface iLoginProps {
    usid: string,
    password: string

}

export interface iLoginResponse {
    status: number,
    data: iLoginResponseData
}

export interface iLoginResponseData {
    token: string;
    error?: Error
}

interface iAuthProvider {
    isAuthed: () => Promise<boolean>,
    onLogin: (props: iLoginProps) => Promise<void>,
    onLogout: () => Promise<void>
}
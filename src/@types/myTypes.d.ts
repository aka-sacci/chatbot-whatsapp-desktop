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
    isMobileDevice: boolean,
    handleSearchbar?: Function<string>,
    handleSearchStatus?: Function<Number>,
    searchStatus?: Number
}


export interface iLoginProps {
    usid: string,
    password: string

}

export interface iServiceDefault {
    status: number,
    data: iServiceDefaultData
}

export interface iServiceDefaultData {
    token?: string,
    error?: Error,
    isSessionActive?: boolean,
    
}


export interface iAuthProvider {
    isAuthed: () => Promise<boolean>,
    onLogin: (props: iLoginProps) => Promise<void>,
    onLogout: () => Promise<void>
}

export interface iSetActivityStatusProps {
    newStatus: number
}

export interface iSessionProvider {
    setActivityStatus: (props: iSetActivityStatusProps) => Promise<void>
    getActivityStatus: () => Promise<boolean>
}
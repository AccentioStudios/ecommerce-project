import express = require('express');
export type expressRequestAndResponseType =
    (req: express.Request, res: express.Response) => void;
export type expressMiddlewareRequestAndResponseType =
    (req: express.Request, res: express.Response, next: express.NextFunction) => void;

// Controller Class

export abstract class Controller {
    getMethods: expressRequestAndResponseType[];
    postMethods: expressRequestAndResponseType[];
    constructor(getMethods: expressRequestAndResponseType[], postMethods: expressRequestAndResponseType[]) {
        this.getMethods = getMethods;
        this.postMethods = postMethods;
    }
}

// Router Classes

export type RouterSettings = {
    routes: Route[],
};
export abstract class Router {
    settings!: RouterSettings
}

export abstract class Route {
    path: string;
    version: string;
    handle: Controller;

    constructor(path: string, version: string, handle: Controller) {
        this.path = path;
        this.version = version;
        this.handle = handle
    }
}

// Middleware Class

export abstract class Middleware {
    funcs: expressMiddlewareRequestAndResponseType[];
    path: string | null = null;
    constructor(funcs: expressMiddlewareRequestAndResponseType[], path: string) {
        this.funcs = funcs;
        this.path = path;
    }

    static fromFileGetted(file: FileGettedFromFolder): Middleware | null {
        if (file == null) return null;
        if (!file.content.default.hasOwnProperty('funcs')) return null;
        return file.content.default as Middleware;
    }
}

// File Readed

export class FileGettedFromFolder {
    name: string;
    content: any;

    constructor(name: string, content: any) {
        this.name = name;
        this.content = content;
    }
}
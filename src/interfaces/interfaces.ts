export interface Solution {
    title?: string;
    description?: string;
    githubUrl?: string;
    liveDemoLink?: string;
    guidedTutorial?: string;
}

export interface Package {
    packageName: string;
    solutions: Solution[];
}

export interface Config {
    content: Package[];
}
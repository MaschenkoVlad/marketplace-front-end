export type BuildMode = 'development' | 'production';

export interface IBuildPath {
    entry: string;
    html: string;
    output: string;
    public: string;
}

export interface IAliasPaths {}

export interface IBuildOptions {
    port: number;
    mode: BuildMode;
    paths: IBuildPath;
}

// Create a notebook component

///<reference path="../../components/phosphor/dist/phosphor.d.ts"/>

import BaseComponent = phosphor.virtualdom.BaseComponent;
import IVirtualElement = phosphor.virtualdom.IVirtualElement;
import IVirtualElementData = phosphor.virtualdom.IVirtualElementData;

interface MimeBundle {"application/json": {};}

interface ExecuteResult {
    output_type: string; /*"execute_result"*/
    execution_count: number;
    data:  MimeBundle;
    metadata: {};
}

interface DisplayData {
    output_type: string; /*"display_data"*/
    data: MimeBundle;
    metadata: {};
}

interface Stream {
    output_type: string; /*"stream"*/
    name: string;
    text: string[];
}

interface JupyterError {
    output_type: string; /*"error"*/
    ename: string;
    evalue: string;
    traceback: string[];
}

type Output = ExecuteResult | DisplayData | Stream | JupyterError;

interface Cell {
    cell_type: string;
    metadata: {
        name: string;
        tags: string[];
    };
    source: string | string[];
}

interface RawCell extends Cell {
    cell_type: string; /*"raw"*/
    metadata: {
        format: string;
        name: string;
        tags: string[];
    }
}

interface MarkdownCell extends Cell {
    cell_type: string; /*"markdown"*/
}

interface CodeCell extends Cell {
    cell_type: string; /*"code"*/
    metadata: {
        name: string;
        tags: string[];
        collapsed: boolean;
        scrolled: boolean | string;
    }
    source: string[];
    outputs: Output;
    execution_count: number;
}

interface UnrecognizedCell extends Cell {
}

interface Notebook {
    metadata: {
        kernelspec: {
            name: string;
            display_name: string;
        };
        language_info: {
            name: string;
            codemirror_mode?: string;
            file_extension?: string;
            mimetype?: string;
            pygments_lexer?: string
        };
        orig_nbformat: number;
    }
    nbformat_minor: number;
    nbformat: number;
    cells: Cell[];
}

interface NBData {
    content: Notebook;
    name: string;
    path: string;
}

class NBComponent extends BaseComponent<NBData> {
    
    
}
// Create a cell component


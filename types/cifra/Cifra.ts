export interface ISongCifra extends INomeArtista {
     id: string;
     tipo: string;
     nome: string;
     tonalidade: number;
     categoria: SongCategoria[];
     cifra: ICifra[]
}

export interface INomeArtista {
     nomeArtista?: string
}

export type SongCategoria = "Envolvente" | "Introspectivo" | "Missões" | "Jovens" | "Santa Ceia"

export interface ICifra {
     chords: string;
     verse: string
}
export interface ISongPartes {
     parte_1: ICifra[];
     parte_2?: ICifra[];
     parte_3?: ICifra[];
     parte_4?: ICifra[];
     parte_5?: ICifra[];
     parte_6?: ICifra[];
     refrao_1?: ICifra[];
     refrao_2?: ICifra[];
     refrao_3?: ICifra[];
     ponte_1?: ICifra[];
     ponte_2?: ICifra[];
     ponte_3?: ICifra[];
     final?: ICifra[];
}


export interface ISongCifra2 extends INomeArtista{
     id: string;
     numero: number;
     tipo: string;
     nome: string;
     tonalidade: number;
     categoria: SongCategoria[];
     cifra: ISongPartes;
}
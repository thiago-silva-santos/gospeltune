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
     verse: string;
     divider: boolean;
}
export interface ISongPartes {
     parte1: ICifra[];
     parte2?: ICifra[];
     refrao?: ICifra[];
     ponte?: ICifra[];
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

export interface IStyle {
     textColor: 'text-black' | 'text-red-900' | 'text-green-900';
     fontWeigth: 'font-normal' | 'font-medium' | 'font-bold' | 'font-semibold';
 }
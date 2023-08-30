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

type SongCategoria = "Envolvente" | "Introspectivo" | "Missões" | "Jovens" | "Santa Ceia"

export interface ICifra {
     chords: string;
     verse: string
}
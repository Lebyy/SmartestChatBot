export const version: string;

interface Ops {
    message: string;
    name: string;
    owner: string;
    user: number;
    language: string;
  }

interface Ops2 {
    message: string;
    language: string;
  }

export class Client{
  constructor();
	
  public chat(ops: Ops): string;
	public cleverchat(ops: Ops2): string;
}
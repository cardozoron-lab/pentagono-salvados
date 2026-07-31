// Substitui o window.storage (exclusivo do ambiente de artefatos do Claude)
// por um armazenamento real no Firestore, com a MESMA assinatura de função —
// por isso o resto do app não precisou mudar quase nada.

import { db } from "./firebase.js";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

const COLLECTION = "salvados_storage";

export const storage = {
  async get(key, shared) {
    const ref = doc(db, COLLECTION, key);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      throw new Error("Chave não encontrada: " + key);
    }
    return { key, value: snap.data().value, shared: !!shared };
  },

  async set(key, value, shared) {
    const ref = doc(db, COLLECTION, key);
    await setDoc(ref, { value, atualizadoEm: Date.now() });
    return { key, value, shared: !!shared };
  },

  async delete(key, shared) {
    const ref = doc(db, COLLECTION, key);
    await deleteDoc(ref);
    return { key, deleted: true, shared: !!shared };
  },
};

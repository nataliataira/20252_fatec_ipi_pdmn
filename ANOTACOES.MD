# 📌 Estrutura do Versionamento

### 🔹 Tipos de versão
- **major** → mudanças incompatíveis com versões anteriores (**breaking changes**).
- **minor** → novas funcionalidades que **não quebram** compatibilidade.
- **patch** → correções de bugs, pequenos ajustes ou *refactors internos*.

---

### 📈 Evolução hipotética da versão
- **1.0.0** → versão inicial  
- **1.0.1** → bugfix  
- **1.0.2** → refactor (ajuste interno sem quebrar compatibilidade)  
- **1.1.0** → nova feature  
- **1.1.1** → ajuste de performance  
- **2.0.0** → mudança *breaking* (ex: mudança de `soma` para `sum`)  

---

### 📝 Resumindo
- **Patch**: `1.0.1 → 1.0.2 → 1.1.1`  
- **Minor**: `1.1.0`  
- **Major**: `2.0.0`  

---

# 📌 Estágios do Git

1. **Untracked / Modified** → arquivo criado/editado, ainda fora do controle do Git  
2. **Staged** → `git add` (preparado para commit)  
3. **Committed (local)** → `git commit` (salvo no repositório local)  
4. **Pushed (remote)** → `git push` (enviado para o repositório remoto)  

---

# 📌 Comandos úteis

### 🔄 Renomear remoto
```bash
git remote rename <nome_atual> <novo_nome>
git push <novo_nome> <branch>
```

---

### 🔍 git diff
- **Comparações de linhas** → mostra o que foi adicionado (+) e removido (-)  
- **Antes do `git add`**  
  ```bash
  git diff
  ```
- **Após `git add`, antes do commit**  
  ```bash
  git diff --staged
  # ou
  git diff --cached
  ```
- **Comparar commits específicos**  
  ```bash
  git diff commit1 commit2
  ```
- **Comparar branches**  
  ```bash
  git diff main feature-branch
  ```
- **Comparar um arquivo específico**  
  ```bash
  git diff HEAD arquivo.txt
  ```

---

### ♻️ git restore
- **Descartar mudanças no Working Directory**  
  ```bash
  git restore arquivo.txt
  ```
- **Remover arquivos do Staging Area** (se já fez `git add`, mas desistiu)  
  ```bash
  git restore --staged arquivo.txt
  ```
- **Restaurar de um commit específico**  
  ```bash
  git restore --source=commit_id arquivo.txt
  ```

---

# 📚 Materiais
- [www.rodrigobossini.com.br](http://www.rodrigobossini.com.br)  
- Pastas: **git**, **react**, **react_native**

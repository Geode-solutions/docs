<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# struct MeshJournal


 Record of mesh modifications (tetrahedra replacements, flips and appended points) to restore the mesh exactly, bit for bit. If an exception is thrown in the middle of journaled (tentative) operations, they are not undone: the changes made so far stay applied and the mesh is valid.



## Members

```cpp
public index_t nb_points

```

```cpp
public index_t nb_vertex_tets

```

```cpp
public vector undos

```



## Functions

### MeshJournal

```cpp
public void MeshJournal(const DelaunayTriangulation & mesh)
```





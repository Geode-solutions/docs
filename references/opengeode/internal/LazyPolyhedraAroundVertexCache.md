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

# class LazyPolyhedraAroundVertexCache


 Per-vertex storage of the polyhedra around vertex cache. The cached values (~190 bytes each) are only allocated the first time a vertex is queried: an unqueried vertex costs one pointer. Allocation is lock-free (atomic compare-exchange), and each allocated value keeps the CachedValue semantics for concurrent const reads.



## Functions

### resize

```cpp
public void resize(geode::index_t nb_vertices)
```


### operator[]

```cpp
public const Cached & operator[](geode::index_t vertex_id)
```


### reset

```cpp
public void reset(geode::index_t vertex_id)
```


### delete_elements

```cpp
public void delete_elements(const std::vector<bool> & to_delete)
```


### permute_elements

```cpp
public void permute_elements(absl::Span<const geode::index_t> permutation)
```





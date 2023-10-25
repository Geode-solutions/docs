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

# class SolidMeshMerger


```cpp
Inherits from VertexMerger<SolidMesh<3U> >
```



# class SolidMeshMerger


```cpp
Inherits from VertexMerger<SolidMesh<dimension> >
```



## Records

PolyhedronOrigin



## Functions

### SolidMeshMerger

```cpp
public void SolidMeshMerger<dimension>(absl::Span<const std::reference_wrapper<const SolidMesh<dimension> > > solids, double epsilon)
```


### ~SolidMeshMerger

```cpp
public void ~SolidMeshMerger<dimension>()
```


### merge

```cpp
public std::unique_ptr<SolidMesh<dimension> > merge()
```


### polyhedron_in_merged

```cpp
public index_t polyhedron_in_merged(index_t solid, index_t polyhedron)
```


### polyhedron_origins

```cpp
public const PolyhedronOrigins & polyhedron_origins(index_t polyhedron)
```





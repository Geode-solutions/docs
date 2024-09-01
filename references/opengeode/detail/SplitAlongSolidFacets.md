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

# class SplitAlongSolidFacets


## Functions

### SplitAlongSolidFacets

```cpp
public void SplitAlongSolidFacets(const SolidMesh3D & mesh, SolidMeshBuilder3D & builder)
```


### ~SplitAlongSolidFacets

```cpp
public void ~SplitAlongSolidFacets()
```


### split_solid_along_facets

```cpp
public MeshesElementsMapping split_solid_along_facets(Span facets_list)
```





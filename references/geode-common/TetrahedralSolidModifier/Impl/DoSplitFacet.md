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

# class DoSplitFacet


## Records

TetrahedronInfo



## Functions

### DoSplitFacet

```cpp
public void DoSplitFacet(class TetrahedralSolidModifier::Impl & modifier, index_t facet_id, const PolyhedronFacetVertices & facet_vertices)
```


### DoSplitFacet

```cpp
public void DoSplitFacet(class TetrahedralSolidModifier::Impl & modifier, const PolyhedronFacet & facet, PolyhedronFacetVertices facet_vertices)
```


### split

```cpp
public SolidSplitInfo split(index_t split_vertex)
```





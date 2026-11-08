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

# class RegionFiller


 Advancing front tetrahedralization of a CavityRegion, with optional Steiner points. All decisions use exact predicates.



## Functions

### RegionFiller

```cpp
public void RegionFiller(DelaunayTriangulation & mesh, const CavityRegion & region, const SteinerFilter * steiner_filter)
```


### initialize_candidates

```cpp
public void initialize_candidates(const CavityRegion & region)
```


 Fixed candidate list: middles of the boundary triangle edges, then centroids of the boundary triangles.

### fill

```cpp
public std::optional<std::vector<Tet>> fill()
```





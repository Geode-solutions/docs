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

# class BackgroundSurfaceOrchestratorImpl


## Functions

### BackgroundSurfaceOrchestratorImpl

```cpp
public void BackgroundSurfaceOrchestratorImpl(const BackgroundSurfaceConstraintModifier & constraint_modifier)
```


### is_swap_edge_allowed

```cpp
public bool is_swap_edge_allowed(const geode::PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### allowed_collapse_edge

```cpp
public ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge(const geode::PolygonEdge & edge)
```





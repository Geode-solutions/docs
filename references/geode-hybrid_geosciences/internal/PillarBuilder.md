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

# class PillarBuilder


## Functions

### PillarBuilder

```cpp
public void PillarBuilder(Pillar & pillar, const StructuralModel & model, Span top_surfaces_ids, Span bottom_surfaces_ids, const ModelMeshesAABBTree3D & surfaces_aabb_trees, const BackgroundSurface & background_surface, Span surface_groups_order, const TriangulatedSurface2D & top_surface, const OwnerSegment3D & pillar_segment)
```


### PillarBuilder

```cpp
public void PillarBuilder(PillarBuilder && other)
```


### ~PillarBuilder

```cpp
public void ~PillarBuilder()
```


### fill_pillar_not_on_border

```cpp
public void fill_pillar_not_on_border()
```


### fill_pillar_on_border

```cpp
public void fill_pillar_on_border()
```





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

# class Skin


## Functions

### Skin

```cpp
public void Skin(const BackgroundSurface & surface, const BackgroundSurfaceModifier & modifier)
```


### skin

```cpp
public const std::unique_ptr<geode::EdgedCurve2D> & skin()
```


### skin_vertices

```cpp
public const std::vector<OrientedSkinVertices> & skin_vertices()
```


### skin_aabb

```cpp
public const geode::AABBTree2D & skin_aabb()
```





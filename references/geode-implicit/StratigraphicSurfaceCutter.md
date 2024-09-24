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

# class StratigraphicSurfaceCutter


## Functions

### StratigraphicSurfaceCutter

```cpp
public void StratigraphicSurfaceCutter(const internal::BackgroundSolid & bmesh, const TriangulatedSurface3D & surface_to_cut_in)
```


### get_parts_of_surface_in_bmesh

```cpp
public vector get_parts_of_surface_in_bmesh()
```





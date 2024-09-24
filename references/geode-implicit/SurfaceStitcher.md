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

# class SurfaceStitcher


## Functions

### SurfaceStitcher

```cpp
public void SurfaceStitcher(const SurfacePart & surface_part_to_stitch, SurfacePart & surface_to_stitch_on, const uuid & cutting_surface_id)
```


### stitch_surface_part_to_other_on_intersections

```cpp
public void stitch_surface_part_to_other_on_intersections()
```





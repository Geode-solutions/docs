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

# class BackgroundSolidPainter


## Functions

### BackgroundSolidPainter

```cpp
public void BackgroundSolidPainter(BackgroundSolid & background)
```


### ~BackgroundSolidPainter

```cpp
public void ~BackgroundSolidPainter()
```


### paint_volume

```cpp
public void paint_volume(const uuid & volume_uuid, Span bounding_surface_uuids, Span oriented_surfaces)
```


 Paints the given uuid on the component volumes of the tetrahedra inside the given surfaces. The boolean associated to the oriented surfaces gives if the surface is oriented towards the volume (true) or not (false).




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

# class SectionRayTracing


## Functions

### SectionRayTracing

```cpp
public void SectionRayTracing(const Section & section)
```


### ~SectionRayTracing

```cpp
public void ~SectionRayTracing()
```


### is_point_inside_surface

```cpp
public bool is_point_inside_surface(const Point2D & point, const Surface2D & surface)
```


### surface_containing_point

```cpp
public optional surface_containing_point(const Point2D & point)
```





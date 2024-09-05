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

# class BackgroundSurfaceOptimizer


## Functions

### BackgroundSurfaceOptimizer

```cpp
public void BackgroundSurfaceOptimizer(const BackgroundSurface & background, BackgroundSurfaceBuilder & builder, BackgroundSurfaceModifier & modifier)
```


### ~BackgroundSurfaceOptimizer

```cpp
public void ~BackgroundSurfaceOptimizer()
```


### optimize_background_elements

```cpp
public void optimize_background_elements()
```


### optimize_background_elements

```cpp
public void optimize_background_elements(index_t first_element)
```


### optimize_background_elements

```cpp
public void optimize_background_elements(index_t first_element, Span immuable_vertices)
```





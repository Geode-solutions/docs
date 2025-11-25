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

# class BackgroundSurfaceDecimatorOperator


## Functions

### ~BackgroundSurfaceDecimatorOperator

```cpp
public void ~BackgroundSurfaceDecimatorOperator()
```


### skip_edge

```cpp
public bool skip_edge(const BackgroundSurface & surface, const PolygonEdge & edge)
```

### BackgroundSurfaceDecimatorOperator

```cpp
protected void BackgroundSurfaceDecimatorOperator(const BackgroundSurface & background)
```


### background

```cpp
protected const BackgroundSurface & background()
```





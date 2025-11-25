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

# class MetricBasedDecimator


```cpp
Inherits from AllNonMacroVertex
```



## Functions

### MetricBasedDecimator

```cpp
public void MetricBasedDecimator(const BackgroundSurface & background, const GridMetric2D & metric)
```


### skip_edge

```cpp
public bool skip_edge(const BackgroundSurface & bsurface, const PolygonEdge & edge)
```





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

# class TriangulatedSurfaceHeightImprovementSimulator


```cpp
Inherits from TriangulatedSurfaceImprovementSimulator<dimension>
```



## Functions

### TriangulatedSurfaceHeightImprovementSimulator

```cpp
public void TriangulatedSurfaceHeightImprovementSimulator<dimension>()
```


### worst

```cpp
public double worst(double metric_triangle_1, double metric_triangle_2)
```


### is_better_after_simulation

```cpp
public bool is_better_after_simulation(const typename TriangulatedSurfaceImprovementSimulator<dimension>::TrianglesMetrics & triangles_metrics)
```


### metric

```cpp
public double metric(const Triangle<dimension> & triangle)
```




# class TriangulatedSurfaceHeightImprovementSimulator


```cpp
Inherits from TriangulatedSurfaceImprovementSimulator<2U>
```



# class TriangulatedSurfaceHeightImprovementSimulator


```cpp
Inherits from TriangulatedSurfaceImprovementSimulator<3U>
```




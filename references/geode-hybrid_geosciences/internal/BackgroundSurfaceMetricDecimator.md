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

# class BackgroundSurfaceMetricDecimator


```cpp
Inherits from BackgroundSurfaceDecimator
```



## Functions

### BackgroundSurfaceMetricDecimator

```cpp
public void BackgroundSurfaceMetricDecimator(const BackgroundSurfaceMetricDecimator & )
```


### operator=

```cpp
public BackgroundSurfaceMetricDecimator & operator=(const BackgroundSurfaceMetricDecimator & )
```


### BackgroundSurfaceMetricDecimator

```cpp
public void BackgroundSurfaceMetricDecimator(BackgroundSurfaceMetricDecimator && )
```


### operator=

```cpp
public BackgroundSurfaceMetricDecimator & operator=(BackgroundSurfaceMetricDecimator && )
```


### BackgroundSurfaceMetricDecimator

```cpp
public void BackgroundSurfaceMetricDecimator(BackgroundSurfaceConstraintModifier & constraint_modifier, const TriangulatedSurfaceDecimatorOperator2D & decimator_operator, const geode::internal::Metric & metric)
```


### ~BackgroundSurfaceMetricDecimator

```cpp
public void ~BackgroundSurfaceMetricDecimator()
```


### collapse_edge

```cpp
protected optional collapse_edge(const OrientedEdge & edge)
```





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

# class BRepComputer


## Functions

### BRepComputer

```cpp
public void BRepComputer(bool segmentation)
```


### ~BRepComputer

```cpp
public void ~BRepComputer()
```


### compute_surface_elements_metric

```cpp
public void compute_surface_elements_metric(const TriangulatedSurface3D & surface, Span elements_to_insert)
```


### compute_curve_elements_metric

```cpp
public void compute_curve_elements_metric(const EdgedCurve3D & curve, Span elements_to_insert)
```


### compute_brep

```cpp
public BRep compute_brep()
```





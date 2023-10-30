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

# class SurfaceSampler3D


## Records

Impl



## Functions

### SurfaceSampler3D

```cpp
public void SurfaceSampler3D(const SurfaceSampler3D & )
```


### operator=

```cpp
public SurfaceSampler3D & operator=(const SurfaceSampler3D & )
```


### SurfaceSampler3D

```cpp
public void SurfaceSampler3D(SurfaceSampler3D && )
```


### operator=

```cpp
public SurfaceSampler3D & operator=(SurfaceSampler3D && )
```


### ~SurfaceSampler3D

```cpp
public void ~SurfaceSampler3D()
```


### SurfaceSampler3D

```cpp
protected void SurfaceSampler3D(BRepSamplingData & data, const Surface3D & surface)
```


### compute_potential_points

```cpp
public int compute_potential_points(const Element & element)
```


### compute_new_elements

```cpp
public int compute_new_elements(absl::Span<const Point3D> points, double , const Point3D & point)
```


### compute_bbox

```cpp
public BoundingBox3D compute_bbox()
```





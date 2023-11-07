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

# class CurlCorrection


## Functions

### CurlCorrection

```cpp
public void CurlCorrection(class FrameFieldParameterization::class Impl::PGP3D & pgp3d)
```


### apply_curl_correction

```cpp
public void apply_curl_correction(double minimum_ratio)
```


### compute_facet_rhs

```cpp
public Vector3D compute_facet_rhs(const FrameTransform3D & mapping, const FacetInfo & facet_info)
```


### compute_edge_normal

```cpp
public Vector3D compute_edge_normal(index_t vertex_i, index_t vertex_j)
```


### compute_edge_matrix

```cpp
public Frame3D compute_edge_matrix(index_t vertex_i, index_t vertex_j)
```





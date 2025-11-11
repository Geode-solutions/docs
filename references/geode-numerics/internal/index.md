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

# namespace internal



## Records

* [FDMCurvatureMinimizationImpl](FDMCurvatureMinimizationImpl.md)


## Functions

### int_pow

```cpp
geode::local_index_t int_pow(geode::local_index_t base, geode::local_index_t exponent)
```


### nb_fdm_derivatives

```cpp
geode::local_index_t nb_fdm_derivatives(geode::local_index_t dimension)
```


### derivative_direction

```cpp
const std::array<int, dimension> & derivative_direction(geode::local_index_t axis_id)
```





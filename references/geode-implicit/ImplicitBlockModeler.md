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

# class ImplicitBlockModeler


## Records

Impl



## Functions

### ImplicitBlockModeler

```cpp
public void ImplicitBlockModeler(BoundingBox3D bbox)
```


### ImplicitBlockModeler

```cpp
public void ImplicitBlockModeler(ImplicitBlockModeler && block_modeler)
```


### ~ImplicitBlockModeler

```cpp
public void ~ImplicitBlockModeler()
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon3D & horizon, double implicit_value)
```


### add_horizon_data_pointset

```cpp
public void add_horizon_data_pointset(const Horizon3D & horizon, const PointSet3D & pointset, double weight)
```


### build_block_mesh

```cpp
public int build_block_mesh()
```


### build_implicit_model

```cpp
public ImplicitStructuralModel build_implicit_model(const HorizonsStack3D & horizons_stack)
```





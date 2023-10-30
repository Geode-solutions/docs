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

# class ImplicitStructuralModelHorizonExpliciter


## Functions

### ImplicitStructuralModelHorizonExpliciter

```cpp
public void ImplicitStructuralModelHorizonExpliciter(const ImplicitStructuralModel & model)
```


### ~ImplicitStructuralModelHorizonExpliciter

```cpp
public void ~ImplicitStructuralModelHorizonExpliciter()
```


### explicit_horizon

```cpp
public void explicit_horizon(const Horizon3D & horizon)
```


### explicit_all_horizons

```cpp
public void explicit_all_horizons()
```


### build

```cpp
public tuple build()
```


 Returns a new ImplicitStructuralModel with all the given horizons inserted as surfaces and the topology rebuilt. Also gives the "input to output" and "output to input" mappings between given and new implicit model. Only the attributes marked as interpolable will be interpolated along the inserted surfaces.




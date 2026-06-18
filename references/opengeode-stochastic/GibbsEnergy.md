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

# class GibbsEnergy


## Functions

### GibbsEnergy

```cpp
public void GibbsEnergy<ObjectType>(const EnergyTermCollection<ObjectType> & collection)
```


### total_log_energy

```cpp
public double total_log_energy(const ObjectSets<ObjectType> & state)
```


### delta_log_add

```cpp
public double delta_log_add(const ObjectSets<ObjectType> & state, const ObjectRef<ObjectType> & new_object)
```


### delta_log_remove

```cpp
public double delta_log_remove(const ObjectSets<ObjectType> & state, const ObjectId & object_id)
```


### delta_log_change

```cpp
public double delta_log_change(const ObjectSets<ObjectType> & state, const ObjectId & old_id, const ObjectRef<ObjectType> & new_object)
```





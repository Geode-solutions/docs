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

# class ComponentRangeIterator


 Iteration state over the components stored in a ComponentsStorage< Component >. This state is stored by value in component ranges so that copying a range (e.g. in range-based for loops) does not allocate.



## Functions

### ComponentRangeIterator

```cpp
public void ComponentRangeIterator<Component>(Iterator begin, Iterator end)
```


### is_valid

```cpp
public bool is_valid()
```


### component

```cpp
public Component & component()
```


### set_active_only

```cpp
public void set_active_only()
```


### next

```cpp
public void next()
```





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

# struct Proposal


## Members

```cpp
public uuid set_id

```

```cpp
public MoveResult<ObjectType> proposed_move

```



## Functions

### new_object

```cpp
public ObjectRef<ObjectType> new_object()
```


### old_object_id

```cpp
public ObjectId old_object_id()
```


### string

```cpp
public std::string string()
```





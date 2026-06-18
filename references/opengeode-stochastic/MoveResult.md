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

# struct MoveResult


## Members

```cpp
public MOVE_TYPE type

```

```cpp
public std::optional<ObjectType> new_object

```

```cpp
public optional old_object_id

```

```cpp
public ProposalProbabilities proposal_probabilities

```



## Functions

### type_string

```cpp
public std::string type_string()
```


### string

```cpp
public std::string string()
```





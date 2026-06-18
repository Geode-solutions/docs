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

# struct ProposalProbabilities


## Members

```cpp
public double log_forward_prob

```

```cpp
public double log_backward_prob

```



## Functions

### string

```cpp
public std::string string()
```


### transition_probability

```cpp
public double transition_probability()
```





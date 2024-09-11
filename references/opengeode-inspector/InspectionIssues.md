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

# class InspectionIssues


## Functions

### InspectionIssues

```cpp
public void InspectionIssues<IssueType>(basic_string_view issue_description)
```


### InspectionIssues

```cpp
public void InspectionIssues<IssueType>()
```


### set_description

```cpp
public void set_description(basic_string_view issue_description)
```


### nb_issues

```cpp
public index_t nb_issues()
```


### add_issue

```cpp
public void add_issue(IssueType issue, basic_string message)
```


### description

```cpp
public basic_string_view description()
```


### string

```cpp
public basic_string string()
```


### issues

```cpp
public const std::vector<IssueType> & issues()
```





# class BackgroundSolidPainter


## Functions

### BackgroundSolidPainter

```cpp
public void BackgroundSolidPainter(BackgroundSolid & background)
```


### ~BackgroundSolidPainter

```cpp
public void ~BackgroundSolidPainter()
```


### paint_volume

```cpp
public void paint_volume(const uuid & volume_uuid, absl::Span<const uuid> bounding_surface_uuids, absl::Span<const std::pair<std::reference_wrapper<const TriangulatedSurface3D>, _Bool> > oriented_surfaces)
```


 Paints the given uuid on the component volumes of the tetrahedra inside the given surfaces. The boolean associated to the oriented surfaces gives if the surface is oriented towards the volume (true) or not (false).




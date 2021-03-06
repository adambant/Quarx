<?php

namespace Yab\Quarx\Repositories;

use Yab\Quarx\Models\Links;

class LinksRepository
{
    /**
     * Returns all Links.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function all()
    {
        return Links::orderBy('created_at', 'desc')->get();
    }

    /**
     * Stores Links into database.
     *
     * @param array $input
     *
     * @return Links
     */
    public function store($input)
    {
        $input['external'] = isset($input['external']) ? $input['external'] : 0;

        return Links::create($input);
    }

    /**
     * Find Links by given id.
     *
     * @param int $id
     *
     * @return \Illuminate\Support\Collection|null|static|Links
     */
    public function findLinksById($id)
    {
        return Links::find($id);
    }

    /**
     * Find Links by menu id.
     *
     * @param int $id
     *
     * @return \Illuminate\Support\Collection|null|static|Links
     */
    public static function getLinksByMenuID($id)
    {
        return Links::where('menu_id', $id)->get();
    }

    /**
     * Find Links by given id.
     *
     * @param int $id
     *
     * @return \Illuminate\Support\Collection|null|static|Links
     */
    public function getLinksByMenu($id)
    {
        return Links::where('menu_id', $id)->get();
    }

    /**
     * Updates Links into database.
     *
     * @param Links $links
     * @param array $input
     *
     * @return Links
     */
    public function update($links, $input)
    {
        $input['external'] = isset($input['external']) ? $input['external'] : 0;

        $links->fill($input);
        $links->save();

        return $links;
    }
}
